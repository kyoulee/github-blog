import React from 'react';

type GiscusErrorProps = {
  message: string;
};

export default function GiscusError({ message }: GiscusErrorProps) {
  const containerStyle: React.CSSProperties = {
    padding: '20px',
    margin: '30px 0',
    backgroundColor: '#30363d',
    border: '1px solid #484f58',
    borderRadius: '6px',
    color: '#f0f6f9',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  };

  const titleStyle: React.CSSProperties = {
    color: '#ff7b72',
    marginBottom: '10px',
    fontSize: '1.2em',
  };

  const detailStyle: React.CSSProperties = {
    whiteSpace: 'pre-wrap', 
    fontSize: '0.9em',
    opacity: 0.8,
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>
        ⚠️ 댓글 시스템 로드 실패 (설정 오류)
      </h3>
      <p style={detailStyle}>
        **GitHub Discussions 연결 설정에 문제가 발견되었습니다.**
        <br />
        <br />
        {message}
        <br />
        <br />
        개발자에게 문의하거나 `config.json`의 **`githubId`**와 **`githubRepo`** 값을 확인해 주세요.
      </p>
    </div>
  );
}