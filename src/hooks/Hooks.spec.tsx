import { act, renderHook } from "@testing-library/react";
import { useExpose } from ".";

describe("useExpose hook", () => {
  it("should work as expected", () => {
    const { result } = renderHook(() => useExpose());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
