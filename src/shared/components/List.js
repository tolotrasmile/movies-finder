import React, { Fragment } from 'react';

function List({ items, keyPath, children, tag: Tag, ...props }) {
  return (
    <Tag {...props}>
      {items.map((item, index) => (
        <Fragment key={(keyPath && item[keyPath]) || index}>{children(item)}</Fragment>
      ))}
    </Tag>
  );
}

List.defaultProps = {
  tag: 'ul',
  items: []
};

export default List;
