import React from 'react';

const IssuesList = React.memo(({ issues, handleRemoveIssues }) => {
  return (
    <div>
      {
        issues.map(({id, screen, description, isFixed, isChecked}) => (
          <div key={id} style={{margin: '1rem', padding: '1rem', border: '1px solid #000000'}}>
            <div>{description}</div>
            <div>
              <img src={screen} alt="..." width="150" height="100" />
            </div>
            <div>Готово - {isFixed ? 'Да' : 'Нет'}</div>
            <div>Проверено - {isChecked ? 'Да' : 'Нет'}</div>
            <button onClick={() => handleRemoveIssues(id)}>Удалить</button>
          </div>
        ))
      }
    </div>
  )
});

export default IssuesList;