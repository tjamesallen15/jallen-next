import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/tjamesallen15',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/tjamesallen15/',
  },
];

type SocialsProps = {
  containerStyles: string,
  iconStyles: string
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
            >
              <div className={iconStyles}>
                {item.icon}
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Socials;