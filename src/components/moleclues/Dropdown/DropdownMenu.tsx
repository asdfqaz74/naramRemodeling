import DropdownContents, { DropdownContentsProps } from '@/components/atoms/Dropdown/DropdownContents';
import DropdownTitle from '@/components/atoms/Dropdown/DropdownTitle';

type DropdownMenuProps = {
  title: string;
  items: DropdownContentsProps[];
  styles?: React.CSSProperties;
};

export default function DropdownMenu({ title, items, styles }: DropdownMenuProps) {
  return (
    <>
      <DropdownTitle title={title} styles={styles}>
        {items.map((item, i) => (
          <DropdownContents key={i} content={item.content} route={item.route} />
        ))}
      </DropdownTitle>
    </>
  );
}
