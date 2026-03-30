import AppRoutes from './routes/AppRoutes';
import { closestCorners, DndContext } from '@dnd-kit/core'
function App() {
  return (
    <>
      {/* <DndContext collisionDetection={closestCorners}> */}
      <AppRoutes />
      {/* </DndContext> */}
    </>
  )
}

export default App



