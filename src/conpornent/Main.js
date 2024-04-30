import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import dummyData from './dummyData';
import Card from './Card';

const Main = () => {
    const[data , setData] = useState(dummyData);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
    
        //動かし始めたtaskが他のcolumnに移動
        if (source.droppableId !== destination.droppableId) {
          //動かし始めたtaskのカラムを取得
          const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
          console.log(sourceColIndex);
          //動かしたcolumnの配列番号を取得
          const destinationColIndex = data.findIndex(
            (e) => e.id === destination.droppableId
          );
          console.log(destinationColIndex);
    
          const sourseCol = data[sourceColIndex];
          const destinationCol = data[destinationColIndex];
    
          //動かし始めたtaskに属していたcolumnの中のtaskを全て取得
          //後でsplice関数でその動かし始めたtaskを削除するため
          //sourceTaskに配列をコピーしておく(破壊操作を後でするため)
          const sourceTask = [...sourseCol.tasks];
          console.log(sourceTask);
    
          //動かし終わったタスクに属していたカcolumnの中のtaskを全て取得
          //後でsplice関数でその動かし始めたtaskを追加するため
          const destinationTask = [...destinationCol.tasks];
          console.log(destinationTask);
    
          //前のcolumnから削除
          const [removed] = sourceTask.splice(source.index, 1);
          //後のcolumnに追加
          destinationTask.splice(destination.index, 0, removed);
    
          data[sourceColIndex].tasks = sourceTask;
          data[destinationColIndex].tasks = destinationTask;
    
          setData(data);
        } else {
        // 同column内のtaskの移動
        const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
        const sourseCol = data[sourceColIndex];
        console.log(sourseCol);
        const sourceTask = [...sourseCol.tasks];
        console.log(sourceTask);
        const [removed] = sourceTask.splice(source.index, 1);
        sourceTask.splice(destination.index, 0, removed);

        data[sourceColIndex].tasks = sourceTask;

        setData(data);

    }
};


  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
        
        <div className='todo'>

            {/*ドラッグ＆ドロップの正式な書き方*/}
            {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                className="todo-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="todo-section-title">{section.title}</div>
                <div className="todo-section-content">
                  {section.tasks.map((task, index) => (

                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Card>{task.title}</Card>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {/*ドラッグ＆ドロップの際にフレークアウトさせない設定*/}
                  {provided.placeholder} 

                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Main;