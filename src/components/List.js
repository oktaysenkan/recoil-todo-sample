import React from 'react';

const List = ({ data }) => {
  const onDragStart = (event, todo) => {
    event.dataTransfer.setData('id', todo.id);
    event.dataTransfer.setData('status', todo.status);
  };

  return (
    <div>
      {data.map((item, i) => (
        <div key={i} draggable onDragStart={(e) => onDragStart(e, item)}>
          <h3>{item.name}</h3>
          {item.status}
        </div>
      ))}
    </div>
  );
};

export default List;
