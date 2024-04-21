// pages/friends.tsx
import React from 'react';

const friends = [
  { name: 'Mavis', emoji: '🐼' },
  { name: 'Candice', emoji: '🐻' },
  { name: 'David', emoji: '🦅' },
  { name: 'Anna', emoji: '🦋' },
];

const Friends = () => {
  return (
    <div>
      <h1>Choose Your Friend</h1>
      <ul>
        {friends.map(friend => (
          <li key={friend.name}>
            {friend.emoji} {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
