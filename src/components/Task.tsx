type TaskProps = {
  task: {
    id: number;
    title: string;
    state: string;
  };
  onArchiveTask: () => void;
  onPinTask: () => void;
};
const Task = ({ task, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div className={`list-item ${task.state}`}>
      <label
        htmlFor='checked'
        aria-label={`archiveTask-${task.id}`}
        className='checkbox'
      >
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask-${task.id}`}
          checked={task.state === 'TASK_ARCHIVED'}
        />
        <span className='cheskbox-custom' onClick={() => onArchiveTask()} />
      </label>

      <label htmlFor='title' aria-label={task.title}>
        <input value={task.title} readOnly={true} name='title' />
      </label>

      {task.state !== 'TAKS_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => onPinTask()}
          id={`pinTask-${task.id}`}
          key={`pinTask-${task.id}`}
          arial-label={`pinTask-${task.id}`}
        >
          <span className='icon-star' />
        </button>
      )}
    </div>
  );
};

export default Task;
