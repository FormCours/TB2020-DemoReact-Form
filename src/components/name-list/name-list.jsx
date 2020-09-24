import React from 'react';

const NameList = (props) => {
    const itemList = props.names.map(
        n => <li>{n}</li>
    );

    return (
        <ul>{itemList}</ul>
    );
}

NameList.defaultProps = {
    names : []
};

export default NameList;