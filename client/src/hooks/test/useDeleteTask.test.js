import { renderHook, act } from '@testing-library/react-native';

import { useDeleteTask } from '../useDeleteTask';

// ✅ Mock del request API
jest.mock('../../api/requests', () => ({
  deleteTaskRequest: jest.fn(),
}));

import { deleteTaskRequest } from '../../api/requests';

describe('useDeleteTask', () => {
  const userId = 1;
  const taskId = 101;

  beforeEach(() => {
    jest.clearAllMocks(); // Limpia mocks antes de cada test
  });

  it('deletes task successfully', async () => {
    deleteTaskRequest.mockResolvedValueOnce({ ok: true });

    const { result, waitForNextUpdate } = renderHook(() => useDeleteTask());

    act(() => {
      result.current.deleteTask(userId, taskId);
    });

    // Verifica el estado de carga inicial
    expect(result.current.loadingDelete).toBe(true);

    // Espera que el estado se actualice después de la promesa
    await waitForNextUpdate();

    expect(deleteTaskRequest).toHaveBeenCalledWith(userId, taskId);
    expect(result.current.loadingDelete).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles error when deletion fails', async () => {
    deleteTaskRequest.mockResolvedValueOnce({ ok: false, status: 500 });

    const { result, waitForNextUpdate } = renderHook(() => useDeleteTask());

    act(() => {
      result.current.deleteTask(userId, taskId);
    });

    expect(result.current.loadingDelete).toBe(true);

    await waitForNextUpdate();

    expect(deleteTaskRequest).toHaveBeenCalledWith(userId, taskId);
    expect(result.current.loadingDelete).toBe(false);
    expect(result.current.error).toBe('Failed to delete task. Status: 500');
  });

  it('handles network error', async () => {
    deleteTaskRequest.mockRejectedValueOnce(new Error('Network error'));

    const { result, waitForNextUpdate } = renderHook(() => useDeleteTask());

    act(() => {
      result.current.deleteTask(userId, taskId);
    });

    expect(result.current.loadingDelete).toBe(true);

    await waitForNextUpdate();

    expect(deleteTaskRequest).toHaveBeenCalledWith(userId, taskId);
    expect(result.current.loadingDelete).toBe(false);
    expect(result.current.error).toBe('Network error');
  });
});