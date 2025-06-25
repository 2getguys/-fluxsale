import React from 'react';
import { MessageCircle, Computer } from 'lucide-react';

type WidgetPreviewProps = {
  color: string;
  position: 'bottom-right' | 'bottom-left' | 'bottom-center';
  buttonText: string;
};

const positionClasses = {
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
};

const WidgetPreview: React.FC<WidgetPreviewProps> = ({ color, position, buttonText }) => {
  return (
    <div>
      <h4 className="font-medium text-gray-700 mb-3">Попередній перегляд</h4>
      <div className="border border-gray-200 rounded-lg p-4 relative bg-gray-50" style={{ height: '200px' }}>
        <div className={`absolute ${positionClasses[position]}`}>
          <button
            style={{ backgroundColor: color }}
            className="px-4 py-2 text-white rounded-full shadow-lg hover:opacity-90 flex items-center"
          >
            <MessageCircle size={18} className="mr-2" />
            {buttonText}
          </button>
        </div>
        <div className="text-center text-gray-500 mt-16">
          <Computer size={40} className="mx-auto mb-2" />
          <p>Попередній перегляд вашого сайту</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetPreview; 