import React from 'react';
import '../App.css';
import DefaultButton from './DefaultButton'

const SelectableListItem = ({
    title, onClick, buttonText
  }) => (
    <div className="selectable-item">
        <div>
            {title}
        </div>
        <DefaultButton 
            title={buttonText}
            onClick={onClick}
        />
        
    </div>
  );
  
export default SelectableListItem;