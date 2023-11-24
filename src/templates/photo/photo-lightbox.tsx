import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Download from 'yet-another-react-lightbox/plugins/download';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface PhotoLightboxProps {
  isOpen: boolean;
  index: number;
  onClose: () => void;
  images: string[];
}

export function PhotoLightbox({
  isOpen,
  index,
  onClose,
  images,
}: PhotoLightboxProps) {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      controller={{ closeOnBackdropClick: true }}
      slides={images.map((image) => ({ src: image }))}
      index={index}
      styles={{
        root: { '--yarl__color_backdrop': 'rgba(0, 0, 0, .8)' },
      }}
      plugins={[
        Captions,
        Fullscreen,
        Slideshow,
        Thumbnails,
        Video,
        Zoom,
        Download,
      ]}
    />
  );
}
