import React from 'react';

const List = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          {item.status}
        </div>
      ))}
    </div>
  );
};

export default List;
