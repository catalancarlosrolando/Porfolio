import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactModal } from '../components/ContactModal';

describe('ContactModal', () => {
  it('does not render dialog when isOpen is false', () => {
    render(<ContactModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders dialog with aria-modal="true" and focusable elements when isOpen is true', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByLabelText(/tu nombre \/ empresa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email de contacto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje o consulta/i)).toBeInTheDocument();
  });

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking close button', () => {
    const handleClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={handleClose} />);

    const closeBtn = screen.getByRole('button', { name: /cerrar modal/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('submits form and displays success alert', async () => {
    const handleClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={handleClose} />);

    fireEvent.change(screen.getByLabelText(/tu nombre \/ empresa/i), {
      target: { value: 'Carlos Test' },
    });
    fireEvent.change(screen.getByLabelText(/email de contacto/i), {
      target: { value: 'carlos@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/mensaje o consulta/i), {
      target: { value: 'Consulta de desarrollo web' },
    });

    const submitBtn = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/¡mensaje enviado!/i)).toBeInTheDocument();
    });
  });
});
