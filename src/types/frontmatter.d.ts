/**
 * MDX 파일 상단의 YAML Frontmatter (메타데이터) 구조를 정의합니다.
 * 이 데이터는 SEO(generateMetadata)나 포스트 목록 생성 시 사용됩니다.
 * * @property {string} title 포스트의 메인 제목이며, <title> 태그, og:title 등에 사용됩니다. (필수)
 * @property {string} [description] 포스트의 간략한 설명으로, <meta name="description"> 등으로 사용됩니다. (선택)
 * @property {string} [image] 소셜 미디어 공유 시 사용될 이미지 경로 (og:image). (선택)
 * @property {string} [date] 포스트 작성일 또는 최종 수정일입니다 ('YYYY-MM-DD' 형식 권장). (선택)
 * @property {string[]} [tags] 포스트를 분류하는 태그 목록입니다. (선택)
 * @property {string} [category] 포스트가 속한 카테고리입니다. (선택)
 */
export interface PostFrontMatter {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  tags?: string[];
  category?: string; 
}