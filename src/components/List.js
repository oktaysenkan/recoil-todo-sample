import React from 'react';

const List = ({ data }) => {
  const onDragStart = (event, name) => {
    event.dataTransfer.setData('name', name);
  };

  return (
    <div>
      {data.map((item, i) => (
        <div key={i} draggable onDragStart={(e) => onDragStart(e, item.name)}>
          <h3>{item.name}</h3>
          {item.status}
        </div>
      ))}
    </div>
  );
};

export default List;
