// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>페이지를 찾을 수 없습니다. (404)</h2>
      <p>요청하신 주소가 잘못되었거나 삭제된 페이지입니다.</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}