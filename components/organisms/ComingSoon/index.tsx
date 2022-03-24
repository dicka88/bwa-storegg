import classNames from 'classnames';
import React from 'react';
import style from './style.module.css';

export default function ComingSoon() {
  return (
    <div className="d-flex justify-content-center align-items-center py-4">
      <div className="row">
        <div className="col-12 text-center">
          <img className={classNames(style.illustration, 'block')} src="/img/games-illustration.jpg" alt="Games" />
        </div>
        <div className={classNames('col-12 text-center color-palette-1 mb-30 fs-4', style.text)}>
          Coming Soon
        </div>
      </div>
    </div>
  );
}
