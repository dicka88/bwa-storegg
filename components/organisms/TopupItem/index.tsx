import React from 'react';

interface TopupItemProps {
  device: 'desktop' | 'mobile';
  data: {
    name: string;
    category: {
      name: string
    };
    thumbnail: {
      secure_url: string;
    }
  };
}

export default function TopupItem(props: TopupItemProps) {
  const {
    device,
    data,
  } = props;

  const { name, category, thumbnail } = data;

  if (device == 'mobile') {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          Category:
          {' '}
          {category.name}
        </p>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <img src={thumbnail.secure_url} width="280" height="380" className="img-fluid" alt="" />
      </div>
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category:
          {' '}
          {category.name}
        </p>
      </div>
    </div>
  );
}
