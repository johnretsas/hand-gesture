import React from 'react';

const rows = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const inARow = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const GoalPost = ({direction}) => {
    if (direction.includes("Left") && direction.includes("Up")) {
        return <UpLeft />       
    }

    if (direction.includes("Left") && direction.includes("Down")) {
        return <DownLeft />       
    }

    if (direction.includes("Right") && direction.includes("Up")) {
        return <UpRight />       
    }

    if (direction.includes("Right") && direction.includes("Down")) {
        return <DownRight />       
    }



    return (
        <div style={{
            border: '3px solid white',
            height: 200,
            width: 240,
            borderBottom: 'none',
            marginRight: 10
        }}>
            {
                rows.map((row, i) =>  {
                    return (
                    <div style={{width: '100%', height: 10, display: 'flex'}}>
                        {
                            inARow.map((mesh, j) => {
                                return (
                                    <MeshElement />
                                )
                            })
                        }
                    </div>)}
                )
            }
        </div>
    )
}

const MeshElement = () => <div style={{height: 10, width: 10, border: '1px solid white', backgroundColor: 'blue'}}></div>;
const ActiveMeshElement = () => <div style={{height: 10, width: 10, border: '1px solid white', backgroundColor: 'red'}}></div>;
const UpLeft = () => {
    return (
        <div style={{
                border: '3px solid white',
                height: 200,
                width: 240,
                borderBottom: 'none',
                marginRight: 10
            }}>
                {
                    rows.map((row, i) =>  {
                        return (
                        <div style={{width: '100%', height: 10, display: 'flex'}}>
                            {
                                inARow.map((mesh, j) => {
                                    if (j<10 && i <10) return <ActiveMeshElement />
                                    return (
                                        <MeshElement />
                                    )
                                })
                            }
                        </div>)}
                    )
                }
            </div>
        )
}
const DownLeft = () => {
    return (
        <div style={{
                border: '3px solid white',
                height: 200,
                width: 240,
                borderBottom: 'none',
                marginRight: 10
            }}>
                {
                    rows.map((row, i) =>  {
                        return (
                        <div style={{width: '100%', height: 10, display: 'flex'}}>
                            {
                                inARow.map((mesh, j) => {
                                    if (j<10 && i >=10) return <ActiveMeshElement />
                                    return (
                                        <MeshElement />
                                    )
                                })
                            }
                        </div>)}
                    )
                }
            </div>
        )
}

const UpRight = () => {
    return (
        <div style={{
                border: '3px solid white',
                height: 200,
                width: 240,
                borderBottom: 'none',
                marginRight: 10
            }}>
                {
                    rows.map((row, i) =>  {
                        return (
                        <div style={{width: '100%', height: 10, display: 'flex'}}>
                            {
                                inARow.map((mesh, j) => {
                                    if (j>=10 && i <10) return <ActiveMeshElement />
                                    return (
                                        <MeshElement />
                                    )
                                })
                            }
                        </div>)}
                    )
                }
            </div>
        )
}
const DownRight = () => {
    return (
        <div style={{
                border: '3px solid white',
                height: 200,
                width: 240,
                borderBottom: 'none',
                marginRight: 10
            }}>
                {
                    rows.map((row, i) =>  {
                        return (
                        <div style={{width: '100%', height: 10, display: 'flex'}}>
                            {
                                inARow.map((mesh, j) => {
                                    if (j>=10 && i >=10) return <ActiveMeshElement />
                                    return (
                                        <MeshElement />
                                    )
                                })
                            }
                        </div>)}
                    )
                }
            </div>
        )
}
export default GoalPost;