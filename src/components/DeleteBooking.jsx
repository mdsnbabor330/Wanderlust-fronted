"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteBooking = ({booking}) => {
  const {
    _id,
    destinationName,
  } = booking;

  const router = useRouter();

  const handelDelete = async () => {
      const res = await fetch(`http://localhost:5001/booking/${_id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
      });
      const data = await res.json();
      console.log(data);

      router.push("/my-bookings");
      router.refresh();
    };
  
  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBooking;

