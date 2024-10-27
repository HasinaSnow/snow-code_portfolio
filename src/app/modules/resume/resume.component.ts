import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { IEducation } from './resume.interface';
import { RESUME_EDUCATION } from './resume..data';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        FieldsetModule,
        AccordionModule,
        TagModule,
        ImageModule
    ],
    selector: 'app-resume',
    template: `
        <div class="resume flex flex-col gap-4 pt-3">

            <p-fieldset legend="Skills">
                <div class="flex flex-col gap-4">
                    <span class="text-md italic font-semibold underline">Languages</span>
                    <div class="flex flex-wrap items-center gap-2 my-2">
                        <!-- javascript -->
                        <p-tag severity="secondary">
                            <span class="mr-1 flex item-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.3rem" height="1.3rem" viewBox="0,0,256,256">
                                    <g fill="#d2b32d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.33594,4h-36.66797c-1.47266,0 -2.66797,1.19531 -2.66797,2.66797v36.66406c0,1.47266 1.19531,2.66797 2.66797,2.66797h36.66406c1.47266,0 2.66797,-1.19531 2.66797,-2.66406v-36.66797c0,-1.47266 -1.19531,-2.66797 -2.66406,-2.66797zM27,36.18359c0,3.99609 -2.34375,5.81641 -5.76562,5.81641c-3.09375,0 -5.32422,-2.07422 -6.23437,-4l3.14453,-1.90234c0.60547,1.07422 1.52734,1.90234 2.85547,1.90234c1.26953,0 2,-0.49609 2,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0 -5.55469,-1.78516 -6.67578,-4l3,-2c0.81641,1.33594 1.70703,2.61328 3.58984,2.61328c1.58203,0 2.41016,-0.78906 2.41016,-1.88281c0,-1.30469 -0.85937,-1.76953 -2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187 -4.58594,-2.64062 -4.58594,-5.75c0,-2.85937 2.18359,-5.03906 5.58984,-5.03906c2.42578,0 4.16797,0.84375 5.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578 -1.35937,-1.63672 -2.45703,-1.63672c-1.11719,0 -1.82422,0.71094 -1.82422,1.63672c0,1.14453 0.70703,1.60547 2.34375,2.31641l0.95313,0.41016c3.24609,1.38672 5.07422,2.80469 5.07422,5.99219c0,3.43359 -2.69922,5.31641 -6.32422,5.31641z"></path></g></g>
                                </svg>
                            </span>
                            <span class="text-base">Javascript</span>
                        </p-tag>
                        <!-- typescript -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.3rem" height="1.3rem" viewBox="0,0,256,256">
                                    <g fill="#2d65d2" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M45,4h-40c-0.553,0 -1,0.448 -1,1v40c0,0.552 0.447,1 1,1h40c0.553,0 1,-0.448 1,-1v-40c0,-0.552 -0.447,-1 -1,-1zM29,26.445h-5v15.555h-4v-15.555h-5v-3.445h14zM30.121,41.112v-4.158c0,0 2.271,1.712 4.996,1.712c2.725,0 2.62,-1.782 2.62,-2.026c0,-2.586 -7.721,-2.586 -7.721,-8.315c0,-7.791 11.25,-4.717 11.25,-4.717l-0.14,3.704c0,0 -1.887,-1.258 -4.018,-1.258c-2.131,0 -2.9,1.013 -2.9,2.096c0,2.795 7.791,2.516 7.791,8.141c0.001,8.664 -11.878,4.821 -11.878,4.821z"></path></g></g>
                                </svg>
                            </span>
                            <span class="text-base">Typescript</span>
                        </p-tag>
                        <!-- php -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="22" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAElEQVR4nO2cPWsUURSGN42KYCGKjVrrH9CAxJyzidHNPeMHSBoLO7skYhWslj1nVawkIFaK+BP8E3410UL8CXaCbKqIjsxCcLMf2Q+cOXey7wun2rt3zn32nXfnwnArFQiCIAiCIAiCIAiCIKhCVD8irPcD6Uch3Ra29EAW6baQfQjcXK/VNg8X+tPXqH4mkH5xh8DFViD7nK29MCdPI2TphF2Es7O48F6s+MNeyx10O5MjWKy4lr7PHzRbS6bd0Wyt3EF7L1IiKYBmgE69XQhHsz84RAf7Q0VGM0C7O07gaHOHhOhgf4DIaI6rsGFhgE69XQhHsz84RAf7Q0VGM0C7O07gaHOHhOhgf4DRZ3Qge7P/N9OZpaX6qaRqV4XttbD96jsX6deea5I+H3hd1hfd4wPrt1x6KwfovQrcmBW273GAHrG3MoLOlMw3LgjrTmygB/YWK2ip6l1h3QikDwJZLbtFe8aQvvQAPVFvsYIObJ+6xrztXlDCjUUP0BP1VhbQ0gbTmN2zGKqfjAH0SL2VCfQyN293jllZqR+KBfTQ3soCOpD9vlbVc51jbl62s8NAJ0n9qMw9Od6vss/+U3QM760coHVHSB92j1mu6p1hoMfV+KBH7C1W0LLQvChkVxKyuVuLj0/0zpbOBLZ3HqAn6i1W0MPn0o2eufpFBz06n0HpV9lneTxH9+2tbKBvXHp6LLA+E9Y/o4AucsOyb2+xgt69PSVz3nzzupDdC2SvhPXHwEUUtWGZpLdYQfd7hJJh5fh4N05V8hZAG0DvCo5mRMfIQnSYb3RMW1UA2gBaInAiHM3+8BAd7A8WGc0A7e46gaPNHRSig/0hIqM5nsKGhQE69XYhHM3+4BAd7A8VGc0A7e44gaPNHRKig/0BRpPROI7NUiH7mT9oHDCYFnTAYHPd+7YV76LGau6gswNQs4NQ3RfLXqVb2QvquYP+d6zxNMLWLVloni4Ecpez17K8Osh/kIGt1X5PmhqrhTkZgiAIgiAIgiAIgiCoErf+ApU8/hNq8Lf0AAAAAElFTkSuQmCC">
                            </span>
                            <span class="text-base">Php</span>
                        </p-tag>
                        <!-- css -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="22" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=">
                            </span>
                            <span class="text-base">CSS</span>
                        </p-tag>
                        <!-- html -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="22" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII=">
                            </span>
                            <span class="text-base">HTML</span>
                        </p-tag>
                    </div>

                    <span class="text-md italic font-semibold underline">Frameworks & Librairies</span>
                    <div class="flex flex-wrap items-center gap-2 my-2">
                        <!-- angular -->
                        <p-tag severity="secondary">
                            <span class="mr-1 flex item-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.3rem" height="1.3rem" viewBox="0,0,256,256">
                                    <g fill="#eb1111" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M24.92969,2.00195c-0.10987,0.0005 -0.22067,0.01869 -0.32617,0.05469l-20.93164,7.28516c-0.444,0.154 -0.72206,0.59745 -0.66406,1.06445l3.30859,27.12305c0.039,0.321 0.22867,0.60381 0.51367,0.75781l17.64844,9.5918c0.148,0.081 0.31256,0.12109 0.47656,0.12109c0.165,0 0.33147,-0.04105 0.48047,-0.12305l17.73828,-9.72266c0.282,-0.155 0.47372,-0.43686 0.51172,-0.75586l3.30664,-27.12109c0.058,-0.469 -0.22288,-0.91636 -0.67188,-1.06836l-21.06641,-7.15625c-0.105,-0.035 -0.21434,-0.05128 -0.32422,-0.05078zM25,7l13,28h-4.4375l-2.78125,-5.99219h-11.5625l-2.78125,5.99219h-4.4375zM25,16.5l-3.91992,8.5h7.83984z"></path></g></g>
                                </svg>
                            </span>
                            <span class="text-base">Angular</span>
                        </p-tag>
                        <!-- nodejs -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0ElEQVR4nO1ZaYhbVRR+03Hfd6mO8859M7XSH1Up/hCKFRUR0T8t0boWJznnzVTb0l+KaEcQcV+Kv4KtM++chEIQoS4V/OGCtYoLImqpIrgUB63SsVrrUtvIecnEl5tM5k0mmTylH4Q8knfv/b5771nuuY5zCP9TnJun07wc3Wg4c5PHg2c4/xX0FNYeDUx3AuOvRqioH2D60witn79h4HgnyTBM1xrBryaI13yYvgMmcoaH5zhJQl8+swgYt1pk/wbBZ0Fwgz5H/wOht43gRYnY57o1bIJG6A03l7lg4j03T+cZpi2WwINGqNC3aeicWSe+KEuHg+AaYNxTNbNMO4H9W52i0zXZFgOhLy2xe43gfe7IiqNmhbwJ8AojtN0i8ZuSUANuXjx+G4pvFxptA8gNuNPtr1dorhHMGsEDVp+vmdH0wpYR780Pnaz7HBj3W9vlAy+gxS1xAEJvVa9oKIr7N952etMdL3l9+DB1eSC0y5qhsZa7wqLTZZhShunr6rFwt8aUBYXUEdPqT5WD4PvVrg//AKYHFxRWHue0CWfyzccawfsN4z5rtd87K7j91NgdgVDOmvXne/NDnjNLcEd8UNuytlUQuwNg+rm8hPs8ocvbyrYBIMAlJTcbihh34iISMT91WuTBQDLXhTbFtFq/Xaarekb9s6fkwvTRBJ+2CND9Wfbje9TwK38UUt0e01CdwFW0vZlhXNY5ARGClWhaSHWr3TQiXisEH0+MACO40iK3FYTuNYIDkKPr3YAGlbCx3WYuc01CBNC7EfIPNEorTGSlQPDVZAhgGqv8FtDFjdsPzi+nJDreL3Yi2CEB+Flka0yZMoPgGiP4EAiuS4QAjdh1jPQLEHpOtxQEeIsbDF4YJ0XoiIBySrAthufZD4KfGKFH+zjdnxgBkbzfN0zv1KTMk4lhWp0YAVHo75rjhxmn0N16VjaMb6rRWvnOAfusPOsCtAZUTo1Temhp1LZ//aoj1feD0DcRIQ93VIBhvCMyo9k44wHTPREB3FEBXuBfXSHDNKYGHUPAM//aAj3WUQHlytz3kVXY5nHmsqpEL5L3g+C6aFlG3+2ogNKguKye5wGmHw3jjrAN4+463qiQGC8UGifTzqncp6nEA3q6XmDrqBvVWOAFtFTJhRlpKRrv0pUAoc+B6UVP6K5ezphJuTQpYLzc6Pd6KW5cATMFCF1ZKpqVKhSxGxqhESvAvKLHwpoXi05XtOyiM94K4l7enweCL1j2szF2Bz2F9Cl2tRmE/jKMT2qhqzJQQEujBjpT4v2y6gTD+Ej5PqHqQBQdNx4KqW7IZRAEf7CMbq9h2gxML1kD1XiQ2BgenmPYT1e733DS1F5IuTTdt1egEzW42LNSW/Tyz2+q/4AWhwd7a7VB6Al3ZMVJTROvGSjvzzNMTxnBnywB213xL51uf3rIMUKbJk5jkcl4WU9pTrsQJmCj6YWQo0smy+EbYW6WjtFSfMW7yETagTs0DXE6Ab28M4xrQehjrTjULfwWnS6XcbneA1grOK5tW+XBpg29GwhThKrZpA+jh/m6JfQw/8HsjErorYIWftUzWQQPAqNoUbZOXlR1h5YYaCHYqkgUp3OHlghU7sCqj4ux79ASA43mnvg3qOHqc6f5HILTJvwDFDl0Rr2QsrgAAAAASUVORK5CYII=">
                            </span>
                            <span class="text-base">NodeJs</span>
                        </p-tag>
                        <!-- nestjs -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVR4nO1ZXagVVRT+QhMzpYewEhWiIoJUCEQwE/+IiMxuxl5r7Irhg39PllA+iSJYaCEYFCQVkVhGL6kvvST5EJb9qUiFlSSiQtlV76w1J+VeJ9admXvGcz3nzPGcmXsO3A82Zw6z95nvO3vtvdb+BhjBCDoHCn5LQe/1wk207yXwgyFwGzoFPryFCg4FfCDE8jsFfEbAR0pwD6ETIODFJkBBuwX0eXQ90P714aaj3WHho6CDCv4oRT6MZ+XMP1gyAe0MBW1T8PpK8jrY6I1CiPRi2SMC2qzgLxX0i4LOC1hjEj3x9yP2TwtoZQkvPhCNcxMF/Ht1Afx3CDcmN+K28BT8gYD6a5Co1n70Qd0K/q1WvwA0Jyfyq29X8KFbIF4R63StTp91uQhQ0NZmyWdsW5JnCrzHWkX+BQH3FSPAe6UsgH2BW9Uw4RDuDvsMwFMVvLs48hz6oGn2bFv4ccj1K6grK/HxAj4cDeSgKNI62Oir8qynt1vqEXRPqitAQK8VT5oTkucV3VOMhyU0S2wVffZkEfDFcJAX8NES+P4oCl4aG2fryj59/4Efrifg3YLJ/yCgFSHcKEtgAdwyBZ2sLpR21hTgY/k9Av66IPLHFPS+hUa87i5nCTMTm0HELWXagpqblbFqHG6iXG0WXs5aNgzWPFH6p18F9Kcll+EUIOBP6wqIZsF7XsBvW5Up4KdvvOcmK/g5Ab+j4IvFCqBvMwlIRARwT9SerYFtb020jxci4BzyQA/cXQLaV4CAfuQFcxgEtCtvEcgTkYiBtdGZAsq7GP2UTwixjyJgNkk+ZTidRFEQ8Cc5LOL9TZEKsXicgt6MCr+o/K0GhTfzJiQuNRlCrzYlwM6sqR88NFSgG2+fZruYCyGgU6mHX4/tmEZJXy9fN3lOFtA36X/TZiS5dwVdd5s55YMXJSc6SzwpIod9eE82SF4V/GHL4l/BP1fE5L7kDB25z9xbvZqlZwX0VIOL9uPYT7JKdG0LBAzU8JUP6bH6vpbnI+DvLEcoeHUjAnx4C80UtlBsiWvnw5vR6PYo4Ks2Lp6lIcauVm/HItHU1VLHLgBvaGQB2rExOaxnOHldTl0vTRIjWgkf3qMCPp2BvB+AvGScgnbU6f+ZgP6Kw/J4rm9vLCTifPB9ZUjFDvR2gbuvTN7OD9WPqgLaL/Ceicf3BeDHURRsFzJbxNw0K6sr75vFruALZlwJ6I+bbAJ7bYEmmVvAm9AusDyRuGpxfXQ1NVN9At5ooeLDu1dAJdvl2vLFX2zZnE6HWQA3O7mv4NdtjbQleauZFHwijnWxEEln8BBuVAA3D+2IADxXQGft9ZG9Y7BQQafAB8+PSNOCEPNGDzefEYwAQ/E/hVzcZFNbcaAAAAAASUVORK5CYII=">
                            </span>
                            <span class="text-base">NestJs</span>
                        </p-tag>
                        <!-- laravel -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1UlEQVR4nO1ZWWicVRQ+bnVJJvd8d7IYjYYKRbEuqGCFuoCIKFIUobhQ3LBCFS2C4gZSRFF8sD4oLg+2CFYUrVTBB1sqWCgWIxpwQ9FqaZvMuTNJailVYxw5v+eHP/WfzM1MUkeYD+Zl5t6z3bMPURtttNFGG23MA3YODh4XnLtAvL8jAM8LsFWASgC2VYmOoVbEhHMoARcL82oBXg/AUAB+C0A17yPe30+thgBsyxUWmBTmrwLzhgA8VAKuCswr7LfxvZ2dPdRKEOZvTPifAvNzJeduE+fO/57o2LzzgfnDRBnml6mVIMCNZuVfagmfRSgWzxDgDwH+LDGfS62CKtERAfjCrHxfzJ0ArDXlt1IrITAvM/eSUCwW6p0fd44DEPRO2bnrqZUgzNvtVR6NOR+AVab8j5qq50OmKtFRZe8vEubH9PUDUKprOGG+NM1IE11dPoZJAIaTV2F+ZK6EH3XutADcFZjfFmAsJ5tOjAGnzqwMsMUuPBXDNDh3ub3ir9Ld3T8fpUCYvxPgRX0JAd637zZrbNckVPZ+iQB/Beb9Ix0dvTHMBdhoTNfNgSLDJuiuMvOtZe8Hsr+rTEkcA9US8731BNtkgq2NdgXmg2qAsvcXNqOIOHeepfYpYb4s70xgvjaRj/lgBVhck1gFOEsJaYtSAU6JEgB42iy5fcYnj0AAnkgLdKmnp7MGv/V25vMZ+z5rS1TrV2OYK8PAvNeI39yEHlQlOtp6PQ3sF/LOjAFOgJ/NeI/XJCaFwqK0eodi8fQYAUrO3W6Ed4/09XU0oQuVvT8zdVft8XJlZL4kcUFgckaX1tewV9kQw7xKdKQAn9mrrGlCjwRaz9LWqex9F2Wwr1AoCnCD/mb8vqRa0Pgwq0yNMp9DESgBSy3rHaib6yNcTJg/NUFfU9oaP8K8I/GU6Wn6k9iealOsAJn4erMZRcaYB4X52dyZSA3M/FEAHhgFzq5LLMnbzPuT6u39khgB7CUPmH8vjRV8T3//CQJcnUyjzN/WmJHW6xk9S7NFAJ40IltmcWeNMR/S2Kl1Tq2pVtVKrVYO04UeD8zvCLAyrfgCvEGNwlKdzupVbUli7uwaGDg+TY+azaYFqffLA/MrWr0PEVxr15AwP1P2/ooq0YL03ohzC7UNsjF7ecPKaFOYFrzYOwLcZP48kgnSqUP6qN0ayJqBVEmaAYH57nTUiG2f/gWtC4F51ARbVjdIgZUCvJtksGaCNAPtGBIX/Of1NlKj0OkxzdlZv48JUlPinoaCNANN6drGG70V1Ah0ns8UoAdjglQZa1fctBXzOghgrOz9ydQIBLgzJyXWDFLFaG9vnzDvsxR+ZUOMa4wO6qYNNalJtQU+towUFaSKADxsig/rZElNQrq7+9NMqsalwwV1S53tTZlVzdDa09nZrUNVAHYavUCHEzqqpox1RTubu1WiBcG56wR4T4Dfp8XjHDSos4al3ujpswIs1tjT7Uk2JjXJlJlvaXZcaBiJYLpTBiZrjamhWDxJl+np0jBTPL9OdtA9PSdSK0CYX0o3Iel3uhdLWhfgA1UyY/2KtjP6TwG1GnSLb76d1qN1aR8VrPoH5rcEuEazJLUy9P+VnOqvtWi1ZiX6v0A3H7YC/SFpKAuFRf+1TG200UYbbVAj+BvyQFqbzgsRDgAAAABJRU5ErkJggg==">
                            </span>
                            <span class="text-base">Laravel</span>
                        </p-tag>
                        <!-- tailwind -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2Yy29NURTGv6pHmIigngMDMTDz/BckUoRi4pUYYEaQYKIGEhMzDcGMNGSvdUqbqkebnLVOVSQakVRo4zXy6MREqoq6svdt1U3a6+7T4547OL9kT+7d99y1zl7rW2ttICMjIyMjI+MvLndPg+lcA5ZN4HCPW6RbEOhqmOfTUbFGk+wAy32wfAVrbvwl30H6AKT73G8qAqPrQdozsdETLNJ37pRShWSne6u+xheeSkM6p8GyEaw/J2e8jp5GC9raZpTP+KCrBiT9iRjPo07IPbR0z/Kyw4QL4znAcmnk+IdA2gzS42A5AJajYLlRPJGLrk6Y9tklG096xt9407EEpN9A0opb4bJx9zS1zwXptZhOPMXth4uL2xCtBEkfAtnq7wDJCZCcQy5X9c+9rCdB8itGYn9GoEfQ2Dmn4HlBuBSkZ0EyANZXMKba3wGjuzz3HwTLcMzk/gGWXrB0g+RNwcuwtSQWcbymaHdiisUu4VtLioBECaLtYB1MQHJ7YKL55TX+jxOyzsVubAekKz3jR7Faz3LaJSqXHDIfwHIY9bkpqBjMo5lgrQPrFbA+AemnkRAbBMl795ltM6xUxmo1bOtr45b0otNm1o/5h7sa0O+UgeWq60J9K+h/xZhqV1m9WgUbDlKfviNBVw1YHk9CIV679joVmjsWgPRFAjo96EKvrORyVSC9m1ihsUXLFi9fTJzWwEKyv/DPpW9EBXrz5TyWZg+D9JCfHZG/0wjDqWB5C9YvLhEDXVTwvW2obGPlo9tj+m17l1MlRsB5Jx7eWBkkfYmmaEXRfbbFzctpnNO4jsZw3rjPNeHy/GWADsYbUOxQYNWnFOywYYeOuMlNchMsx/LDj2219c7YTC0NiK0+Plitt+Nfcgmfc0WyrD2OHcDtKJmE8eREYgNSusy6MDkHxIZPHVKFotr8JZW3Qj0DhWtREdjTcPeg7mpxqIjRA65gkmxz8l2R2C6WZBUC2Qwje/OXu1Gtu9ytWKMzMjIyMjKQDr8BpC0SbqrQ1j8AAAAASUVORK5CYII=">
                            </span>
                            <span class="text-base">Tailwind</span>
                        </p-tag>
                        <!-- sass -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,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">
                            </span>
                            <span class="text-base">Sass</span>
                        </p-tag>
                    </div>

                    <span class="text-md italic font-semibold underline">Databases & others technologies</span>
                    <div class="flex flex-wrap items-center gap-2 my-2">
                        <!-- mysql -->
                        <p-tag severity="secondary">
                            <span class="mr-1 flex item-center justify-center">
                                <img width="23" src="data:image/png;base64,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">
                            </span>
                            <span class="text-base">Mysql</span>
                        </p-tag>
                        <!-- mongoDb -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO1ZzW8NURS/Qgg74n8Qdjydc6bRiCBqZdNnJ11gzp1i0USCVS2EBV0Im37MOe+JRrwNC2VRrNiwI5FoQlSCin7YVIJq5b6Oph/z5s6C+ZD+kl8yyb2L3+/cc86cuaPUCv5j6AB8T1CrIkKz06IFf9TJTosqEvyBXRtJ8L0WnDUkgQ9eT2mzKgpIoPZH/ALeVUWAZmyPED9HxnaVZxztw03E8LmRAWIcy3UqkUDQMPrzpwD9Ko/wGHdoxpklYqfrXJxGM2avyhu04GBExKeI4VtEKt1TeYLPbtOy6NeFwgQxTEalkldtdlVeQAJDDYr2k2HkmsCQygN0f/OWqOiHIt9phpFGBe1XYWvW+hUxXolpm6+14HBMV7qcqfhybdvauL6vBV6QwMsYA19OXW1dl5kBCpw2S99/HrLhHgqctuwMMN6yvLSekMDTWAMCA5mI7+ravUYLjMeLw0eG8acE4+VaeXXqBvwKlGxjAzHe1wwPrONF1d2eugFi6LAbgDtmjLYaCMBP3YBm7LUKY7hdp3Uf9qZugBgfJzBQJcYbCfY9TN2AZnxrTSGBPkP7PnyTugEzqFkjK3CNGK4nKPax1A2ENw42YWbM6E5QA99TN0ACPxOcwEVivJRLA1rwawJhXXXa2+1E6gbCSdN2AmeJ8VyCVHuVuoEkb1gKsNPQbhQHMzCAFxKkRocW50SCdns+dQOeuHsT1MCxOi37/IqzJ6NpFEfjxTlH5hhr8mMm06gBsXM6NrLilqmCh211orKC11PaEHcKxM4hw7jod9ZwvcoSxLB/2e3bvED3gCfYGl24+EtX4KDKAxr1elOchpFrDGdUnkACx5eOF+b2zWe3efGpwDQxnlR5BFXQWXgLYT47F356ksAzr79pp8o1ZtWqsC5uzhswzwHuM2uqSNCCw2ZmUkWFZhgx96OqqNCCo+Z2WhUVxDCZyaz/txD+nZlSRYUO/5FlrWMF6h/iNwFD5Zin1tTcAAAAAElFTkSuQmCC">
                            </span>
                            <span class="text-base">MongoDB</span>
                        </p-tag>
                        <!-- firebase -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2ZT4hVVRzHP5WTqOQiNy0UAsGFG8lVuJFU3GQrUchNtCjdxKihhqNpKqXhzHNMxMFm7i3BYEAo/EM66jhzjv9wIFGRFKU/lhsLXEiBf+Yr97zxed+8e59N99w374E/+O7u4vM5v/PO/M4ZeF4NWAqZr5C/FTCXRiyFtCtECrisDbxIo5UCepxAMe/SaKWAP2IC19VBE41S2sdEBQzGBKKt9AGNUgp4swy+mD/VzTgaoRTyfoJA1IXlZd+JF1TgpAp8Tz2VQr5MEbijr3ml9F0bi1VALq3Mpl5KIYcSBYoSLe6bbl5SG1dLAgVOUi+lkJupAiF3tZdXVWBpDP6ZXVC03SxbZbils7yeH3w34xTyqIqA1MU2tXGrQiClC4rgDTtlkYvhvfwEvuGNqvBRtvFQ2yvgE7ugaKtZOkvwRYEt+Ql0saQqfCfSSqTPUgRiXRiC/7YMvpju/AQCNlcV+BypGWk5qtYFXeFlWQ4kwEcd+Ck/gZADqfB7kVYMCUTZmCKwg1My/JAIb13uRb+LfAQCrqYKbIrBp3WhHelIKrhKOcdk//AdNCnkfiJ8xxBw87B8+j/gLdJp5vgX6GR66upvSICPd2En0o//Ed66LPMvELAwEX53yuo/SXQiHR0RvGRozUNgfaLAuirwa5AOjxDeuhzMQ2B/BfxXVeA/GfG2USzX/AuEXBw2uElrU+DXZoKXLA804PGWF13cFfBPmUAhBb4F6VgmeLn0M82fQMjUitVfkwC/HqnHA7x1R+nb/gS6eKdMYHsCfPSX94QneOuywp9AwOrYuCytyh1eMuz2JxASxMblcvjNSL2e4a0TOO5PIOB82bj8BH4L0qkc4K3L737goxtTdFWMj8tRvkDqyw1eMgzqKBOyC+xjcsW4vNUdc/nB25LEDF8v0U/H5dYawVsnsMiHQHNpXC4MtbYW8NalJbtAwB43Lu+qObxkCbML7OJndfBoFOAlw5nsAt/xW83BbUngr+wChnmyXBkFgevqZ0FmAScxQJMMzTLcrQH4PRk26ghjvcCXiZxnkgztsjzMYbsMuoeuXl7zDl4h0sdMWYxH+As6zazcwRMeZRfJ8GsG+NsyfCiN4n86NcB4t2ct/45gxe+7rXiOidRLqY8pKY+1w9OjfqZTryXLWzJcSjwWfV4T8yz1MkaWj2S4IcMvMnzs9ZXheVE/9RhWKOxUDYbwOwAAAABJRU5ErkJggg==">
                            </span>
                            <span class="text-base">Firebase</span>
                        </p-tag>
                        <!-- git -->
                        <p-tag severity="secondary">
                            <span class="flex item-center mr-1 justify-center">
                                <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC">
                            </span>
                            <span class="text-base">Git</span>
                        </p-tag>
                    </div>
                </div>
            </p-fieldset>

            <p-fieldset legend="Education">
                    <p-accordion>
                        @for (item of educations; track $index) {
                            <p-accordionTab>
                                <ng-template pTemplate="header">
                                    <span class="flex items-center gap-2 w-full">
                                        <i class="pi pi-graduation-cap pi-diplôme-cap text-xl"></i>
                                        <span class="font-bold white-space-nowrap flex flex-col gap-1">
                                            {{ item.diplom }} - {{ item.year }}
                                            <small class="font-normal">course : {{ item.course }}</small>
                                        </span>
                                    </span>
                                </ng-template>
                                <p class="m-0 text-justify">
                                    {{ item.description }}
                                </p>
                            </p-accordionTab>
                        }
                    </p-accordion>
            </p-fieldset>

        </div>
    `
})

export class ResumeComponent {
    educations: IEducation[] = RESUME_EDUCATION
}