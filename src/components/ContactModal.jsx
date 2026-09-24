import { useState } from 'react';
import { Modal } from './ui/Modal';
import { InputGroup, TextareaGroup } from './ui/Input';
import { Button } from './ui/Button';
import { Alert } from './ui/Alert';

export function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Contacto Técnico • Carlos R. Catalan"
      subtitle="San Juan, Argentina • Tel: 2645144094 • linkedin.com/in/carlosrcatalan. Envía tu consulta para proyectos o asesoría técnica."
    >
      {submitted ? (
        <Alert variant="success" title="¡Mensaje Enviado!">
          Gracias por contactarte. Te responderé a la brevedad.
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputGroup
            label="Tu Nombre / Empresa"
            type="text"
            placeholder="Ej. Juan Pérez / Empresa X"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <InputGroup
            label="Email de Contacto"
            type="email"
            placeholder="juan@empresa.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <TextareaGroup
            label="Mensaje o Consulta"
            placeholder="Describe el proyecto o consulta técnica..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" size="md" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary" size="md" showArrow>
              Enviar Mensaje
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
