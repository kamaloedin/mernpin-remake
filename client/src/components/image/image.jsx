import { Image } from '@imagekit/react';

const IKImage = ({ src, w, h, alt, className }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={src}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default IKImage;
