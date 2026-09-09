import { useRegisterSW } from 'virtual:pwa-register/react'

/* ============================================================================
 * CARTEL DE ACTUALIZACIÓN
 * ============================================================================
 *
 * Cuando publicás una versión nueva (npm run deploy), el celular de quien ya
 * tiene la app la descarga solo, en segundo plano. Pero no puede reemplazar a
 * la vieja mientras la app está abierta.
 *
 * Este cartelito avisa que hay algo nuevo y deja actualizar en el momento.
 * Si lo ignoran, la versión nueva entra sola la próxima vez que abran la app.
 *
 * También avisa la primera vez que la app queda lista para funcionar sin
 * internet.
 * ========================================================================= */
export default function ActualizarApp() {
  const {
    offlineReady: [listaSinInternet, setListaSinInternet],
    needRefresh: [hayVersionNueva, setHayVersionNueva],
    updateServiceWorker
  } = useRegisterSW()

  if (!listaSinInternet && !hayVersionNueva) return null

  const cerrar = () => {
    setListaSinInternet(false)
    setHayVersionNueva(false)
  }

  return (
    <div
      role="status"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-4 text-white shadow-2xl">
        {hayVersionNueva ? (
          <>
            <p className="font-bold">Hay juegos nuevos</p>
            <p className="mt-1 text-sm text-slate-300">
              Se actualizó la app. Tocá para ver los cambios.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => updateServiceWorker(true)}
                className="flex-grow rounded-full bg-teal-500 py-2.5 font-extrabold text-slate-900 transition hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                Actualizar
              </button>
              <button
                onClick={cerrar}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                Después
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <p className="flex-grow text-sm">
              Listo: ya podés jugar sin internet.
            </p>
            <button
              onClick={cerrar}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              Ok
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
