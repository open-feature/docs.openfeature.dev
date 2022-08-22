import clsx from 'clsx';
import React from 'react';
import { OpenFeatureComponentCard, OpenFeatureComponentCardData } from '../OpenFeatureComponentCard/';

export class OpenFeatureComponentTable extends React.Component<{
  items: OpenFeatureComponentCardData[];
}> {
  override render() {
    return (
      <section className={clsx('row')}>
        {this.props.items
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((item) => {
            return (
              <article className="col col--5 margin-bottom--lg">
                <OpenFeatureComponentCard {...item} />
              </article>
            );
          })}
      </section>
    );
  }
}
