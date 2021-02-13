import * as React from 'react';
import classnames from 'classnames/bind';
import styles from './TodoPage.scss';

const cx = classnames.bind(styles);

export interface ITodoPageProps {
}

enum taskStatus {
  PENDING,
  COMPLETED,
  DEFERRED
}

enum priority {
  HIGH,
  MEDIUM,
  LOW
}

interface todoListItem {
  author: string;
  content: string;
  status?: taskStatus;
  notes?: string;
  createdOn?: Date;
  completedOn?: Date;
  estimatedTime?: string;
  priority?: priority;
}

const TodoPage = (props: ITodoPageProps) => {
  
  const [todoList, setTodoList] = React.useState<todoListItem[]>(
    [
      {
        author: "Clemence",
        content: "Test content"
      }
    ]
  );

  function generateList(){
    if (todoList.length < 1) {
      return (
        <div>No tasks yet</div>
      )
    }
    return (
      <div>
        <table>
          <tr>
            <th>Author</th>
            <th>Content</th>
          </tr>
          {todoList.map(item => (
            <tr>
              <td>{item.author}</td>
              <td>{item.content}</td>
            </tr>
          ))}
        </table>
        
      </div>
    )
  }

  return (
    <div className={cx('todo-content')}>
      {generateList()}
    </div>
  );
}

export default TodoPage;