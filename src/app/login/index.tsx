
export default function Login({ fecharModal }: any) {
  return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-lg">
                <h2>Login</h2>
                <button onClick={fecharModal}>fechar</button>
            </div>
        </div>
  );
}
