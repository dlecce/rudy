import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';

export default function ImagePopup({
  imageUrl,
  children
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#" onClick={(e) => { e.preventDefault(); setOpen(true); }} style={{ textDecoration: 'underline' }}>
        {children}
      </a>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imageUrl }]}
        plugins={[Zoom]}
      />
    </>
  );
}