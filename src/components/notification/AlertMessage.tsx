import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertMessage({ message }: { message: string }) {
  return (
    <div className="max-w-sm mx-auto fixed top-12 left-4 right-4 ">
      <Alert className={`${message ? 'bg-green-700' : ''}`}>
        <AlertTitle
          className={`${
            !message ? 'dark:text-yellow-600' : 'text-white'
          } text-center`}
        >
          {message ? 'Success' : 'Oppss !'}
        </AlertTitle>
        <AlertDescription
          className={`${
            !message ? 'dark:text-yellow-600' : 'text-white'
          } text-center`}
        >
          {message ? message : 'Masukan minimal satu Karakter '}
        </AlertDescription>
      </Alert>
    </div>
  );
}
