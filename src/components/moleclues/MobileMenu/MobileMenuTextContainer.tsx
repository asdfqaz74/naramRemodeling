import MobileMenuText from '@/components/atoms/MobileMenu/MobileMenuText';
import { MobileMenuTextGroup } from '@/styles/components/MobileMenu/MobileMenu';

interface MenuItems {
  [key: string]: { route: string; text: string };
}

export interface MobileMenuTextContainerProps {
  items: MenuItems;
}

export default function MobileMenuTextContainer({ items }: MobileMenuTextContainerProps) {
  return (
    <MobileMenuTextGroup>
      {Object.keys(items).map((key, idx) => (
        <MobileMenuText key={idx} route={items[key].route} text={items[key].text} />
      ))}
    </MobileMenuTextGroup>
  );
}
