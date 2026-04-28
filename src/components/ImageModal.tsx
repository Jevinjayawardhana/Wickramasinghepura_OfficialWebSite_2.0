import { X, Download } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal = ({ isOpen, onClose, imageUrl }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <X size={32} />
      </button>
      
      <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
        <img 
          src={imageUrl} 
          className="max-h-[85vh] w-auto object-contain shadow-2xl animate-in zoom-in-95 duration-300"
          alt="Preview"
        />
        <a 
          href={imageUrl} 
          download 
          className="mt-6 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
        >
          <Download size={14} /> Download Original
        </a>
      </div>
    </div>
  );
};

export default ImageModal;