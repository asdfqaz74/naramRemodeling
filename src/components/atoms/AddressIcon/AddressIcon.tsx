import { StyledAddress } from '@/styles/components/AddressGroup/AddressGroup';

type AddressIconProps = {
  first_content: string;
  second_content?: string;
  image_src: string;
  image_alt: string;
  fontSize?: string;
  direction?: string;
};

function AddressIcon({ first_content, second_content, image_src, image_alt, fontSize, direction }: AddressIconProps) {
  return (
    <StyledAddress fontSize={fontSize} direction={direction}>
      <img src={image_src} alt={image_alt} />
      <div className="content">
        <p className="first_content">{first_content}</p>
        <p className="second_content">{second_content}</p>
      </div>
    </StyledAddress>
  );
}

export default AddressIcon;
