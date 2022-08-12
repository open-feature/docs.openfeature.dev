import { faCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export class SDKComponentCardData {
  href: string;
  iconDefinition?: IconDefinition;
  title: string;
  description: string;
}

export class SDKComponentCard extends React.Component<SDKComponentCardData> {
  override render() {
    const iconDef = this.props.iconDefinition ? this.props.iconDefinition : faCode;
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
        <FontAwesomeIcon className={clsx(styles.svg)} size={'3x'} icon={iconDef} />
        <h1 className={clsx('text--truncate', styles.cardTitle)}>{this.props.title}</h1>
        <h2 className={clsx(styles.cardDescription)}>{this.props.description}</h2>
      </a>
    );
  }
}
