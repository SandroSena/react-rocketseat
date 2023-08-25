interface TasksProps {
  content: string[];
  hasCompleted: boolean;
}

export const Tasks = ({ content, hasCompleted }: TasksProps) => {
  return (
    <div>
      {content.map((taskText) => {
        return <p key={taskText}>{taskText}</p>;
      })}
    </div>
  );
};
