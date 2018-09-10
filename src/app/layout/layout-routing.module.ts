import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'lvuser', loadChildren: './lvuser/lvuser.module#LvuserModule' },
            { path: 'regional', loadChildren: './regional/regional.module#RegionalModule' },
            { path: 'propinsi', loadChildren: './propinsi/propinsi.module#PropinsiModule' },
            { path: 'preveledge', loadChildren: './preveledge/preveledge.module#PreveledgeModule' },
            { path: 'releaseuser', loadChildren: './releaseuser/releaseuser.module#ReleaseUserModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
            { path: 'sub-buku-besar', loadChildren: './acount-coa/acount-coa.module#AcountCoaModule' },
            { path: 'log', loadChildren: './log/log.module#LogModule' },
            { path: 'kabupaten', loadChildren: './kabupaten/kabupaten.module#KabupatenModule' },
            { path: 'kecamatan', loadChildren: './kecamatan/kecamatan.module#KecamatanModule' },
            { path: 'kelurahan', loadChildren: './kelurahan/kelurahan.module#KelurahanModule' },
            { path: 'kodepos', loadChildren: './kodepos/kodepos.module#KodeposModule' },
            { path: 'jenis-account', loadChildren: './jenis-account/jenis-account.module#JenisAccountModule' },
            { path: 'masteruser', loadChildren: './masteruser/masteruser.module#MasterUserModule' },
            { path: 'master-mitra', loadChildren: './mastermitra/mastermitra.module#MasterMitraModule' },
            { path: 'master-los', loadChildren: './masterlos/masterlos.module#MasterLosModule' },
            { path: 'kelompok-account', loadChildren: './kelompokaccount/kelompokaccount.module#KelompokAccountModule' },
            { path: 'master-collectibilitas', loadChildren: './mastercollectibilitas/mastercollectibilitas.module#MasterCollectibilitasModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule'},
            { path: 'buku-besar', loadChildren: './bukubesar/bukubesar.module#BukuBesarModule'},
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'master-anggota', loadChildren: './masteranggota/masteranggota.module#MasterAnggotaModule' },
            { path: 'simpanan-setting', loadChildren: './simpanan/setting/setting.module#SettingModule' },
            { path: 'identitas', loadChildren: './identitas/identitas.module#IdentitasModule' },
            { path: 'agama', loadChildren: './agama/agama.module#AgamaModule' },
            { path: 'pendidikan', loadChildren: './pendidikan/pendidikan.module#PendidikanModule' },
            { path: 'pekerjaan', loadChildren: './pekerjaan/pekerjaan.module#PekerjaanModule' },
            { path: 'jabatan', loadChildren: './jabatan/jabatan.module#JabatanModule' },
            { path: 'golongan', loadChildren: './golongan/golongan.module#GolonganModule' },
            { path: 'ahliwaris', loadChildren: './ahliwaris/ahliwaris.module#AhliwarisModule' },
            { path: 'instansi-grup', loadChildren: './instansi/instansi.module#InstansiModule' },
            { path: 'anggota', loadChildren: './anggota/anggota.module#AnggotaModule' },
            { path: 'tagihan', loadChildren: './tagihan/tagihan.module#TagihanModule' },
            { path: 'cabang', loadChildren: './cabang/cabang.module#CabangModule' },
            { path: 'master-data-tabungan', loadChildren: './masterdatatab/masterdatatab.module#masterdatatabModule' },
            { path: 'produk-tabungan', loadChildren: './jenisproduk/jenisproduk.module#JenisprodukModule' },
            { path: 'produk-simpanan', loadChildren: './produksimpanan/produksimpanan.module#ProduksimpananModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
