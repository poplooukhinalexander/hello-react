import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return(
    <div>
        <MyInput value={filter.searchBy} onChange={e => setFilter({...filter, searchBy: e.target.value})} placeholder="Search..." />
        <MySelect 
            value={filter.sortBy}
            onChange={selectedSort => setFilter({...filter, sortBy: selectedSort})}
            defaultText="Sort by" 
            options={[{value: "title", text: "Title"}, {value: "body", text: "Body"}]}/>
    </div>
    );
}

export default PostFilter;