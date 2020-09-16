import { getRouteWithParameters } from './routes.services';

describe('[Service] routes service', () => {
  it('returns route if no parameters', () => {
    const route = 'route';
    const result = getRouteWithParameters(route, {});

    expect(result).toBe(route);
  });

  it('returns route with correct parameter', () => {
    const route = 'route/:id';
    const result = getRouteWithParameters(route, { id: '1' });

    expect(result).toBe('route/1');
  });

  it('returns route with correct parameters', () => {
    const route = 'route/:id/path/:pathid';
    const result = getRouteWithParameters(route, { id: '1', pathid: '2' });

    expect(result).toBe('route/1/path/2');
  });
});
