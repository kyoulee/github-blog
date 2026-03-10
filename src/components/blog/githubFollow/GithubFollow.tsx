import React from 'react'
import GithubFollower from './GithubFollower'
import GithubFollowing from './GithubFollowing'

function GithubFollow() {
  return (
    <div>
      <div>following</div>
      <GithubFollowing />
      <GithubFollower />
    </div>
  )
}

export default GithubFollow