import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition as BrandsIconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCode, IconDefinition as FreeIconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type CardData = {
  href: string;
  title: string;
  description: string;
};

type FontAwesomeCardData = {
  iconDefinition: BrandsIconDefinition | FreeIconDefinition;
};

type SvgCardData = {
  darkThemeSvgImgSrc: string;
  lightThemeSvgImgSrc: string;
  altText: string;
};

export type OpenFeatureComponentCardData = CardData & (SvgCardData | FontAwesomeCardData);

export class OpenFeatureComponentCard extends React.Component<OpenFeatureComponentCardData> {
  override render() {
    const props = this.props as CardData & Partial<SvgCardData & FontAwesomeCardData>;
    let iconDef: IconProp;
    if (props.iconDefinition) {
      iconDef = (props.iconDefinition ? props.iconDefinition : faCode) as IconProp;
    }
    return (
      <a
        target="_blank"
        href={this.props.href}
        style={{ position: 'relative' }}
        className={clsx('card padding--lg', styles.cardContainer)}
      >
        <div style={{ height: 0, position: 'absolute', right: 20, top: 20 }}>
          {this.props.href.startsWith('http') ? '🔗' : ''}
        </div>
        {props.iconDefinition ? (
          <FontAwesomeIcon className={clsx(styles.svg)} size={'3x'} icon={iconDef} />
        ) : (
          <ThemedImage
            className={clsx(styles.svg)}
            width={45}
            height={45}
            alt={props.altText}
            sources={{
              light: props.lightThemeSvgImgSrc,
              dark: props.darkThemeSvgImgSrc,
            }}
          />
        )}
        <h1 className={clsx('text--truncate', styles.cardTitle)}>{this.props.title}</h1>
        <h2 className={clsx(styles.cardDescription)}>{this.props.description}</h2>
      </a>
    );
  }
}
