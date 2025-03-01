import useOwnerProjects from "./useOwnerProjects"
import Loading from "../../ui/Loading"
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";


function ProjectsTable() {
    const {isLoading, projects} = useOwnerProjects();

    console.log("projects:",projects);
    
    if(isLoading) return <Loading />

    if(!projects.length) return <Empty resourceName="پروژه" />

  return (
    <Table>
        <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>دسته بندی</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
                <th>درخواست ها</th>
        </Table.Header>
        <Table.Body>
            {
                projects.map((project, index)=>{
                    return <ProjectRow key={project._id} project={project} index={index} />     
                })
            }
        </Table.Body>
      </Table>
  )
}

export default ProjectsTable
