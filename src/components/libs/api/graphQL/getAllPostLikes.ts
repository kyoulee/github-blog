export type ReactionContent =
  'THUMBS_UP' | 'THUMBS_DOWN' | 'LAUGH' | 'HEART' | 'HOORAY' | 'ROCKET' | 'EYES' | 'CONFUSED';

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface ReactionUser {
  login: string;
}

export interface ReactionNode {
  content: ReactionContent;
  user: ReactionUser;
}
export interface ReactionsConnection {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: ReactionNode[];
}

export interface DiscussionNode {
  heartReactions: { totalCount: number };
}

export interface DiscussionsConnection {
  pageInfo: PageInfo;
  nodes: DiscussionNode[];
}

export interface GraphQLData {
  repository: {
    discussions: DiscussionsConnection;
  };
}

export interface GitHubGraphQLResponse {
  data: GraphQLData | null;
  errors?: any[];
}


const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const API_URL = 'https://api.github.com/graphql';

const query = `
  query GetDiscussionsPage($cursor: String) {
    repository(owner: "kyoulee", name: "github-blog-obsidian") {
      discussions(first: 50, after: $cursor, orderBy: {field: CREATED_AT, direction: DESC}) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          title
          heartReactions: reactions(content: HEART) { 
            totalCount
          }
        }
      }
    }
  }
`;

/**
 * 다음 페이지 데이터를 가져오는 함수 (재활용)
 * @param nextCursor - 이전 요청에서 받은 'endCursor' 값 (첫 요청 시 null)
 * @returns 다음 페이지 데이터가 담긴 Promise<GitHubGraphQLResponse>
 */
export async function getNextPage(nextCursor: string | null): Promise<GitHubGraphQLResponse> {
  const variables = {
    cursor: nextCursor
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL Errors:", result.errors);
    throw new Error('API 요청 중 오류 발생');
  }

  return result;
}

/**
 * 모든 Discussion 페이지를 순회하며 HEART 리액션 총 개수를 합산하는 함수
 *
 * 이 함수는 GraphQL의 페이지네이션(Cursor) 기능을 사용하여
 * 모든 Discussion을 가져오고, 각 Discussion의 HEART 개수를 합산합니다.
 * * @returns 모든 Discussion에 대한 HEART 리액션의 총 개수 (Promise<number>)
 */
export async function getAllPostLikes() : Promise<number>{
  let allDiscussions: DiscussionNode[] = [];
  let nextCursor: string | null = null;
  let hasNextPage = true;
  let totalHeartCount = 0;

  while (hasNextPage) {   
    const data: GitHubGraphQLResponse = await getNextPage(nextCursor);

    const discussions = data.data?.repository.discussions;
    
    if (!discussions) {
      console.error("데이터 구조를 찾을 수 없습니다.");
      break;
    }

    discussions.nodes.forEach(node => {
        totalHeartCount += node.heartReactions.totalCount;
        allDiscussions.push(node);
    });

    hasNextPage = discussions.pageInfo.hasNextPage;
    nextCursor = discussions.pageInfo.endCursor;
  }

  console.log('=================================');
  console.log(`✅ 모든 Discussion 가져오기 완료. 총 ${allDiscussions.length}개의 글 확인.`);
  console.log(`❤️ 모든 글의 HEART 리액션 총 개수: ${totalHeartCount}`);
  console.log('=================================');

  return totalHeartCount;
}