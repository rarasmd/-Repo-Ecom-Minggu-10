<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Produk extends CI_Controller
{

    public function index()
    {
        $data['title'] = "Halaman Data User";

        $this->load->view('Data_produk/index');
    }

    public function pencarian()
    {
        $id = $this->input->post('idproduk');
        $data = $this->db->get_where('tb_produk', ['id_produk' => $id])->row_array();

        if (!empty($data)) {
            // Buat sebuah array
            $callback = array(
                'status' => 'success',
                'nama_produk' => $data['nama_produk'],
                'id_produk' => $data['id_produk'],
                'stok' => $data['stok'],
                'harga' => $data['harga'],
            );
        } else {
            $callback = array('status' => 'failed');
        }

        echo json_encode($callback);
    }
}
