export type FormProps = {
  onSubmit: any;
  children: React.ReactNode;
};

function Form({ onSubmit, children }: FormProps) {
  return (
    <form className="widthFull" onSubmit={onSubmit}>
      <div>{children}</div>
    </form>
  );
}

export default Form;
