import AlertComponent from './AlertComponent.jsx';

function AlertApp() {
  return (
    <div>
      {/* Pranešimas su atidėjimu (automatiškai užsidarys po 3 sekundžių) */}
      <AlertComponent type="warning" message="We have a problem" delay={3000} />

      {/* Pranešimas be atidėjimo (užsidarys tik paspaudus X) */}
      <AlertComponent type="danger" message="Great success" />
    </div>
  );
}

export default AlertApp;