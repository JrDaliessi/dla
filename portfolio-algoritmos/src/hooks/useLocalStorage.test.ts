import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  const KEY = 'test-key';

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('retrieves the initial value from localStorage', () => {
    window.localStorage.setItem(KEY, JSON.stringify('stored'));

    const { result } = renderHook(() => useLocalStorage(KEY, 'default'));

    expect(result.current[0]).toBe('stored');
  });

  it('updates the stored value via setValue', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 'initial'));

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
    expect(window.localStorage.getItem(KEY)).toBe(JSON.stringify('updated'));
  });
});
