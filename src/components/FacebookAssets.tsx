
import React from 'react';
import { Download } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const FacebookAssets = () => {
  // Function to trigger download of an element as an image
  const downloadAsImage = (elementId: string, fileName: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Use html2canvas to capture the element as an image
    import('html2canvas').then(html2canvas => {
      html2canvas.default(element, {
        backgroundColor: null,
        scale: 2,
        // Higher resolution
        logging: false
      }).then(canvas => {
        // Create download link
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }).catch(err => {
      console.error('Failed to load html2canvas:', err);
    });
  };

  return <div className="container-custom py-16">
      <h1 className="section-title text-center mb-12">Facebook Assets</h1>
      <div className="grid grid-cols-1 gap-12">
        {/* Facebook Cover Image */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="subsection-title mb-4">Facebook Cover Image</h2>
          <p className="text-gray-600 mb-6">
            Standard Facebook cover image size (820 × 312 pixels). Click the button below to download.
          </p>
          
          <div className="mb-6 border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <div id="fb-cover-image" className="bg-pitstop-darkblue relative overflow-hidden" style={{
            width: '100%',
            height: '312px',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="scale-150 mb-4">
                    <Logo />
                  </div>
                  <div className="bg-white/90 px-6 py-3 rounded-md">
                    <h2 className="text-xl font-diner text-center">
                      <span className="text-pitstop-darkblue">Fuel Your Journey,</span>
                    </h2>
                    <h2 className="text-xl font-diner text-center">
                      <span className="text-pitstop-red">Satisfy Your Hunger</span>
                    </h2>
                    <p className="text-lg font-medium text-center text-[#e44c0a]">Your go-to destination for delicious food and quality fuel on the highway.</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-md">
                <p className="text-sm font-bold">
                  <span className="text-pitstop-red">JR's</span> <span className="text-pitstop-darkblue">Corner</span>
                </p>
              </div>
            </div>
          </div>
          
          <button className="btn-primary w-full flex items-center justify-center" onClick={() => downloadAsImage('fb-cover-image', 'jrs-corner-facebook-cover.png')}>
            <Download size={18} className="mr-2" />
            Download Facebook Cover Image
          </button>
        </div>
        
        {/* Facebook Profile Image */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="subsection-title mb-4">Facebook Profile Image</h2>
          <p className="text-gray-600 mb-6">
            Standard Facebook profile image (170 × 170 pixels). Click the button below to download.
          </p>
          
          <div className="mb-6 border-2 border-dashed border-gray-300 p-4 rounded-lg flex justify-center">
            <div id="fb-profile-image" className="bg-pitstop-darkblue relative overflow-hidden rounded-full" style={{
            width: '170px',
            height: '170px'
          }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-pitstop-red p-3 rounded-md">
                  <span className="text-white font-diner text-3xl">JR</span>
                </div>
              </div>
            </div>
          </div>
          
          <button className="btn-primary w-full flex items-center justify-center" onClick={() => downloadAsImage('fb-profile-image', 'jrs-corner-facebook-profile.png')}>
            <Download size={18} className="mr-2" />
            Download Facebook Profile Image
          </button>
        </div>
      </div>
    </div>;
};

export default FacebookAssets;
