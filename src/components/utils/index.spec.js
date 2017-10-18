import React from 'react';
import { getDisplayName } from './';

describe('getDisplayName', () => {
  it('returns displayName of the passed component', () => {
    const MockMainComponent = () => <div />;
    MockMainComponent.displayName = 'MockMainComponent';
    expect(getDisplayName(MockMainComponent)).toBe('MockMainComponent');
  });
});
