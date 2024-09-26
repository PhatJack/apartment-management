import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { User } from '@/types'

interface UserListProps {
  users: User[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="">ID</TableHead>
          <TableHead className="w-1/2">Username - Apartment</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Account Type</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className="font-medium">
            <TableCell>{user.id}</TableCell>
            <TableCell className="">
              <div className="w-full flex gap-3">
                <img
                  src={user.avatar}
                  alt="user avatar"
                  className="size-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="">{user.name}</p>
                  <p className="text-xs">{user.room}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>{user.phoneNumber.slice(0,-4) + '****'}</TableCell>
            <TableCell className={`${user.type === 'OWNER' ? 'text-green-500' : 'text-blue-500'}`}>
              {user.type}
            </TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UserList
