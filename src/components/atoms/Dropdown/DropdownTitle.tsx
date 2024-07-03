type DropdownTitleProps = {
  title: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
};

export default function DropdownTitle({ title, children, ...styles }: DropdownTitleProps) {
  return (
    <ul
      style={{
        color: '#116046',
        fontSize: '1.125rem',
        fontWeight: 700,
        lineHeight: '1.25rem',
        gap: '0.625rem',
        display: 'flex',
        flexDirection: 'column',
        ...styles,
      }}
    >
      <p style={{ margin: '0 0 1.25rem 0' }}>{title}</p>
      {children}
    </ul>
  );
}
