import React from 'react';

const List = ({ data }) => {
  const onDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };

  return (
    <div>
      {data.map((item, i) => (
        <div key={i} draggable onDragStart={(e) => onDragStart(e, item.id)}>
          <h3>{item.name}</h3>
          {item.status}
        </div>
      ))}
    </div>
  );
};

export default List;
